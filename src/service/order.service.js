import axios from "axios";

export default class OrderService {
  constructor() {
    console.log();
    this.instance = axios.create({
      baseURL: "http://localhost:5000/api/orders",
      withCredentials: true,
    });
  }

  getAllOrders = () => this.instance.get('/');
  getOrder = (id) => this.instance.get(`/${id}`);
  createOrder = (data) => this.instance.post(`/createOrder`, data);
  deleteOrder = (id) => this.instance.delete(`/${id}`);
}
