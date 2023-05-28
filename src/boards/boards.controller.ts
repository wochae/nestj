import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) { }

    /*
        boardsService: BoardsService;
    
        constructor(boardsService: BoardsService) {
            this.boardsService = boardsService;
        }
    
    */
    @Get('/')
    getBoards(): Board[] {
        return this.boardsService.getAllBoards();
    }
    /*
        좌항 우항에 있는 boardsService는 서로 다른 객체이다. 
    */

    @Post()
    createBoard(
        @Body('title') title: string,
        @Body('description') description: string,
    ): Board {
        return this.boardsService.createBoard(title, description);
    }
}
