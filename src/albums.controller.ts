import { Controller, Get, Req, Post, Res } from "@nestjs/common";
import { Request, Response} from "express";

@Controller('/album')
export class AlbumsController{

    @Get()
    getAlbum(){
        return "Photo";
    }
}