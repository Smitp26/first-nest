import { Controller, Get, Req, Post, Res } from "@nestjs/common";
import { Request, Response} from "express";

@Controller('/users')
export class UsersController{

    // @Get('/profile')
    // getUsers(): Promise<Object>{
    //     return new Promise<Object>((resolve, reject) =>{
    //        resolve({
    //             "Status" : "Promise Resolved"
    //        });
    //        reject({
    //             "Status":"Promise Rejected"
    //        });
    //     });
    // }

    @Get('/profile')
    getUsers() {
        return "Hello User";
    }

    

    @Post('/profile')
    PostUsers(@Req() request: Request, @Res() response: Response){

        console.log(request.body);

        console.log(response.send('Users'));
    }
}