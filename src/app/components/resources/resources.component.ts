import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  userName: string = '';
  selectedImage: string | ArrayBuffer | null = 'assets/images/kamran-ch-7pES3XC7l7Q-unsplash.jpg'; // Provide the path to your default image
  imageError: string = '';

  selectedOption:string = '1';
  selectedOption1:string = '1';
  selectedOptionType:string = '1';
  checked:any;
  inputValue: number = 0;

  selectedItemLabel: string = 'شهر'; // Default label

  items: any[] = [
    { label: 'شهر', command: () => this.itemClicked('شهر') },
    { label: 'أسبوع', command: () => this.itemClicked('أسبوع') },
    { label: 'يوم', command: () => this.itemClicked('يوم') }
  ];

  itemClicked(label: string) {
    this.selectedItemLabel = label;
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          this.selectedImage = e.target.result;
        }
      };
      reader.readAsDataURL(file);
      this.imageError = ''; // Clear any previous error message
    }
  }

  onImageError(event: any): void {
    this.selectedImage = 'assets/images/3d_girl_yawning-wallpaper-1920x1080.jpg'; // Set default image on error
    this.imageError = 'Invalid image. Please select a valid image file.'; // Display error message
  }

  incrementValue() {
    this.inputValue += 1;
  }

  decrementValue() {
    if (this.inputValue > 0) {
      this.inputValue -= 1;
    }
  }
}
