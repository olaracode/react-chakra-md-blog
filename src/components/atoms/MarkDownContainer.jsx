import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Box } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  materialOceanic,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import useStore from "@/hooks/useStore";

const MarkDownContainer = ({ content = "" }) => {
  const { store } = useStore();
  const theme = store.theme ? materialOceanic : atomDark;
  return (
    <Box
      sx={{
        h1: {
          fontSize: 24,
          fontWeight: "bold",
          borderBottom: "2px solid",
          borderColor: "brand.primary",
        },
      }}
    >
      <ReactMarkdown
        children={content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={theme}
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </Box>
  );
};

MarkDownContainer.propTypes = {
  content: PropTypes.string,
};

export default MarkDownContainer;
