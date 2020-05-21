import { LoadJsonService } from './../services/load-json.service';
import { Component, OnInit } from '@angular/core';
import { PopularFilms } from './../interface/popular-films';
import { ModalController } from '@ionic/angular';
import { DetailsFilmPage } from '../details-film/details-film.page';
import {FiltrePipe} from '../pipeFiltre/filtre.pipe';
import { PopularSeries } from '../interface/popular-series';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  popular: PopularFilms[] = [];
  recherche : string ;
  selected : number;
  series : PopularSeries [] = [];
  page : number = 1;

  
  constructor(private LoadJsonService: LoadJsonService, private modalCtrl: ModalController) {

  }

  Filtre(){
    if (this.selected == 1) {
      this.series = [];
      this.popular = [];
      this.getFilms();
      
    } else if (this.selected == 2){
      this.series = [];
      this.popular = [];
      this.getSerie();
    }else{

    }
  }

  getFilms (){
    this.LoadJsonService.getPopular(this.page).subscribe(data => {
      this.popular = data.results;
      if (data.results.lenght = 0){
        
      }
    });
    
  }
  updateFiltre(){
    if (this.recherche.length == 0){
      this.ngOnInit();
    }else{
      this.LoadJsonService.searchFilm(this.recherche).subscribe(data => {
        this.popular = data.results;
      })
    }

  }
  ngOnInit() {
    this.Filtre();
  }


  getSerie (){
    
    this.LoadJsonService.getSeriePopular().subscribe(data => {
      this.series = data.results;
    })
  }

  controlCategorie (){

  }
  async detailsSerie(ser){
    const modal = await this.modalCtrl.create({
      component: DetailsFilmPage,
      componentProps: {
        series : ser,
        type:"serie"
      }
    });
    await modal.present();
  }
  

  loadData(event) {
    this.page = this.page + 1;
    this.getFilms();
    console.log("Cargando");
  }

  async detailsModal(films) {
    const modal = await this.modalCtrl.create({
      component: DetailsFilmPage,
      componentProps: {
        movies : films,
        type : "movie"
      }
    });
    await modal.present();
  }

}
