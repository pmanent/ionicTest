import { TestBed, inject, async } from '@angular/core/testing';
import { CitiesService } from './cities.service';
import { HttpClientModule } from '@angular/common/http';

describe('CitiesService', () => {
  
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CitiesService],
      imports: [
        HttpClientModule
      ]
    });
  }));

  it('should be getCities', async(inject([CitiesService], (service: CitiesService) => {
        console.log('should be getCities');
        let observable = service.getCities();

        observable
        .subscribe(data=>{
          expect(data.length).toBeGreaterThan(1); //true
        });
    })
  
  ));
  
});
