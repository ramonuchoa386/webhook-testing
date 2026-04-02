import { Controller, Get, Post, Query, Headers, Body, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get('webhook')
  handleGetWebhook(
    @Query('validationToken') queryToken: string,
    @Headers('client-request-id') headerToken: string,
    @Res() res: Response,
  ) {
    const token = queryToken || headerToken;
    res.set('Content-Type', 'text/plain');
    res.status(200).send(token);
  }

  @Post('webhook')
  handlePostWebhook(@Body() body: any, @Res() res: Response) {
    console.log('Received webhook payload:', JSON.stringify(body, null, 2));
    res.status(202).send();
  }
}