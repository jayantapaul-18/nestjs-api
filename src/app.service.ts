import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getRequest(): any {
    return {
      status: "success",
    };
  }
  getHealth(): any {
    return {
      api: "health",
      data: {
        status: "success",
      },
    };
  }
}
