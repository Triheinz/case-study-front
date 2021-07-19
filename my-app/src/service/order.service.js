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
  editOrder = (id, data) => this.instance.put(`/${id}`, data);
  deleteOrder = (id) => this.instance.delete(`/${id}`);
}
