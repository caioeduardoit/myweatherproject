import { Controller, Get, Param, Res } from '@nestjs/common';
import axios from 'axios';

@Controller('weather')
export class WeatherController {
  @Get(':cidade')
  async getWeatherInfo(@Param('cidade') cidade, @Res() res) {
    const apikey = process.env.WEATHERAPI_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cidade}&aqi=no&lang=pt&alerts=yes`;

    try {
      const response = await axios.get(url);

      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }
}
