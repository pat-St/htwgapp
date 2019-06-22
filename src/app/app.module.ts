import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from "./service/auth/authGuard.service";
import { CanteenService } from "./service/canteen/canteen.service";
import { HtwgscheduleService } from "./service/schedule/htwgschedule.service";
import { LoginService } from "./service/login/login.service";
import { GradesService } from "./service/grades/grades.service";
import { ScheduleComponent } from './main/schedule/schedule.component';
import { CanteenComponent } from './main/canteen/canteen.component';
import { GradesComponent } from './main/grades/grades.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { EndlichtComponent } from "./main/endlicht/endlicht.component";
import { SemestereventsComponent } from "./main/semesterevents/semesterevents.component";
import { PrintBalanceComponent } from "./main/print-balance/print-balance.component";
import { CacheService } from './service/cache/cache.service';
import { EndlichtService } from "./service/endlicht/endlicht.service";
import { Http } from "@angular/http";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader"
import { SettingsComponent } from "./settings/settings.component";

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, "/i18n/", ".json")
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptHttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        MainComponent,
        ScheduleComponent,
        CanteenComponent,
        GradesComponent,
        EndlichtComponent,
        SemestereventsComponent,
        PrintBalanceComponent,
        ActionButtonComponent,
        SettingsComponent
    ],
    providers: [
        AuthGuard,
        CacheService,
        CanteenService,
        EndlichtService,
        HtwgscheduleService,
        LoginService,
        GradesService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
