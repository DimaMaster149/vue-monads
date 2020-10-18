import axios from 'axios'
import { Either, right, left } from "@sweet-monads/either";
import { NetworkError } from '../errors/NetworkError';

export default {
  async get(route: string): Promise<Either<NetworkError, any>> {
    try {
      const { data } = await axios.get(route);
      return right(data);
    } catch (e) {
      return left(new NetworkError(e.message));
    }
  }
}