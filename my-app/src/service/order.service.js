import axios from "axios";

export default class OrderService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/orders`,
      withCredentials: true,
    });
  }

  getAllOrders = (data) => this.instance.get('/', data);
  getOrder = (id) => this.instance.get(`/${id}`);
  editOrder = (id, data) => this.instance.put(`/${id}`, data);
  deleteOrder = (id) => this.instance.delete(`/${id}`);
}
