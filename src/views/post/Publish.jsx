import React from "react";
import Container from "@/components/atoms/Container";
import { Textarea, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import useBlogs from "@/blog/useBlogs";
const initialValue = {
  title: "",
  content: "",
};
const Publish = () => {
  const { postContent } = useBlogs();
  const [post, setPost] = React.useState(initialValue);
  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  const handlePublish = () => {
    console.log(post);
    postContent(post);
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
      <Button onClick={handlePublish} my={5}>
        Crear
      </Button>
    </Container>
  );
};

export default Publish;
