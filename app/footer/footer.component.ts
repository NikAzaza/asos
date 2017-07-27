import { Component } from '@angular/core';

export class FooterInfo {
    value: String;
    ref: String;
}
@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: '/app/footer/footer.component.html',
    styleUrls: ['./../../footer/footer.component.css']
})
export class FooterComponent {
    usersEmail: string = "";

    question:FooterInfo[] = [
        {value: "Help", ref: "#"}, 
        {value: "Track Order", ref: "#"}, 
        {value: "Delivery", ref: "#"},
        {value: "Returns", ref: "#"}
    ];

    whatInStore:FooterInfo[] = [
        {value: "Women", ref: "#"}, 
        {value: "Men", ref: "#"}, 
        {value: "Buy Gift Vouchers", ref: "#"},
    ];

    followAsos: FooterInfo[] = [
        {value: "Facebook", ref: "https://www.facebook.com/"}, 
        {value: "Twitter", ref: "https://www.twitter.com"}, 
        {value: "Youtube", ref: "https://www.youtube.com/"},
    ];

    moreAboutAsos: FooterInfo[] = [
        {value: "Corporate Responsibility", ref: "#"}, 
        {value: "Jobs at ASOS", ref: "#"}, 
        {value: "Investors", ref: "#"},
    ];
    moreAsosSites: FooterInfo[] = [
        {value: "Mobile and ASOS apps", ref: "#"}, 
        {value: "Marketplace", ref: "#"},
    ];

}


