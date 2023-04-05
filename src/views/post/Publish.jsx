import React from "react";
import Container from "@/components/atoms/Container";
import {
  Textarea,
  Input,
  Box,
  Text,
  Wrap,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import useBlogs from "@/blog/useBlogs";
import MarkDownContainer from "@/components/atoms/MarkDownContainer";
import { Tags } from "@/components";
const initialValue = {
  title: "",
  content: "",
};
const Publish = () => {
  const { postContent } = useBlogs();
  const [post, setPost] = React.useState(initialValue);
  const tag = React.useRef(null);
  const [tags, setTags] = React.useState([]);
  const addTags = () => {
    if (tag.current.value !== "") {
      setTags([...tags, tag.current.value]);
      tag.current.value = "";
    }
  };
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  const handlePublish = () => {
    console.log(post);
    postContent({ ...post, tags });
    setPost(initialValue);
  };
  return (
    <Container>
      <Input
        placeholder="Title"
        value={post.title}
        name="title"
        mb={10}
        onChange={handleChange}
      />
      <Textarea
        placeholder="Contenido"
        name="content"
        value={post.content}
        onChange={handleChange}
      ></Textarea>
      <Box display="flex" gap={2}>
        <Input my={5} ref={tag} />
        <Button onClick={addTags} my={5} variant="primary">
          +
        </Button>
      </Box>
      <Wrap>
        {tags.map((tag, index) => (
          <Tooltip key={index} label="eliminar">
            <Tags
              cursor="pointer"
              onClick={() => removeTags(index)}
              content={tag}
            />
          </Tooltip>
        ))}
      </Wrap>
      <Button onClick={handlePublish} my={5} variant="primary">
        Crear
      </Button>
      {post.content !== "" && (
        <Box>
          <Text>Preview</Text>
          <MarkDownContainer content={post.content} />
        </Box>
      )}
    </Container>
  );
};

export default Publish;
