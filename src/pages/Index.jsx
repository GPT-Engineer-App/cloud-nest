// Complete the Index page component for a storage app similar to Google Drive
import { Box, Button, Flex, Heading, Input, List, ListItem, Text, VStack, Image } from "@chakra-ui/react";
import { FaFileUpload, FaFolder, FaFile, FaTrashAlt } from "react-icons/fa";

const Index = () => {
  // Dummy data to simulate files and folders
  const filesAndFolders = [
    { id: 1, name: "Photos", type: "folder" },
    { id: 2, name: "Documents", type: "folder" },
    { id: 3, name: "Resume.pdf", type: "file" },
    { id: 4, name: "Budget.xlsx", type: "file" },
  ];

  return (
    <VStack spacing={4} p={5}>
      <Heading as="h1" size="xl">
        My Storage
      </Heading>
      <Text>Welcome to your cloud storage. Manage your files and folders here.</Text>

      <Flex justify="space-between" w="100%">
        <Button leftIcon={<FaFileUpload />} colorScheme="blue">
          Upload Files
        </Button>
        <Button leftIcon={<FaFolder />} colorScheme="green">
          New Folder
        </Button>
      </Flex>

      <List spacing={3} w="100%">
        {filesAndFolders.map((item) => (
          <ListItem key={item.id} p={3} boxShadow="md" borderRadius="md" display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              {item.type === "folder" ? <FaFolder color="orange" /> : <FaFile color="blue" />}
              <Text ml={2}>{item.name}</Text>
            </Box>
            <Button size="sm" colorScheme="red" leftIcon={<FaTrashAlt />}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
