import { LoadJsonService } from './../services/load-json.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { PopularFilms } from '../interface/popular-films';

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.page.html',
  styleUrls: ['./details-film.page.scss'],
})
export class DetailsFilmPage implements OnInit {

  @Input() movies;
  @Input() series;
  @Input() type;
  popular2: PopularFilms;

  constructor(private modalCtrl: ModalController, private LoadJsonService: LoadJsonService) { }

  ngOnInit() {
    if (this.type = "movie"){
      this.popular2 = this.movies;
    }else if (this.type = "serie"){
      this.popular2.title = this.series.name;
    }

  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
