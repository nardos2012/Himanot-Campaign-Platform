import API from "../api";

export const getStats = () => API.get("/admin/stats");

export const confirmDonation = (id) =>
  API.put(`/donations/${id}/confirm`);

export const rejectDonation = (id) =>
  API.put(`/donations/${id}/reject`);