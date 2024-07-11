import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosClient from "axios-client";

const chatbotApi = {
  list: () => {
    return axiosClient.get("/chatbot");
  },
  detail: (id) => {
    return axiosClient.get(`/chatbot/${id}`);
  },
  createChatbot: ({ name, description }) => {
    return axiosClient.post("/chatbot", { name, description });
  },
  updateChatbot: ({ id, name, description, persona, prompt, instruction }) => {
    return axiosClient.patch(`/chatbot/${id}`, {
      name,
      description,
      persona,
      prompt,
      instruction,
    });
  },
  updateChatbotKnowledge: ({ id, plainText, websiteUrls }) => {
    return axiosClient.patch(`/chatbot/${id}/load-knowledge`, {
      plainText,
      websiteUrls,
    });
  },
  deleteChatbot: (id) => {
    return axiosClient.delete(`/chatbot/${id}`);
  },
  generateChatbot: (id) => {
    return axiosClient.post(`/chatbot/${id}/load-knowledge`);
  },
};

const useList = () => {
  return useQuery({
    queryKey: ["chatbot"],
    queryFn: chatbotApi.list,
  });
};

const useDetail = (id) => {
  return useQuery({
    queryKey: ["chatbot", id],
    queryFn: () => chatbotApi.detail(id),
    enabled: !!id && id !== "add",
  });
};

const useCreateChatbot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: chatbotApi.createChatbot,
    onSuccess: () => {
      queryClient.invalidateQueries("chatbot");
    },
  });
};

const useUpdateChatbot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: chatbotApi.updateChatbot,
    onSuccess: (data) => {
      console.log({ data });
      queryClient.invalidateQueries("chatbot");
    },
  });
};

const useUpdateChatbotKnowledge = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: chatbotApi.updateChatbotKnowledge,
    onSuccess: (data) => {
      console.log({ data });
      queryClient.invalidateQueries("chatbot");
    },
  });
};

const useDeleteChatbot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: chatbotApi.deleteChatbot,
    onSuccess: () => {
      queryClient.invalidateQueries("chatbot");
    },
  });
};

const useGenerateChatbot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: chatbotApi.generateChatbot,
    onSuccess: () => {
      queryClient.invalidateQueries("chatbot");
    },
  });
};

export const chatbotQuery = {
  useList,
  useDetail,
  mutation: {
    useCreateChatbot,
    useUpdateChatbot,
    useUpdateChatbotKnowledge,
    useDeleteChatbot,
    useGenerateChatbot,
  },
};
