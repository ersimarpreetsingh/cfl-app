import { PipeModule } from './pipes/pipes.module';
import { ClipboardModule } from 'ngx-clipboard';
import { SubComponentModule } from './components/sub-component/sub-component.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarsComponent } from './components/avatars/avatars.component';
import { BudgetReviewPopUpComponent } from './components/budget-review-pop-up/budget-review-pop-up.component';
import { CalculatorPopUpSecondComponent } from './components/calculator-pop-up-second/calculator-pop-up-second.component';
import { CalculatorPopUpComponent } from './components/calculator-pop-up/calculator-pop-up.component';
import { CharitableGivingComponent } from './components/charitable-giving/charitable-giving.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { DFoodNutritionComponent } from './components/d-food-nutrition/d-food-nutrition.component';
import { DMyBudgetReviewComponent } from './components/d-my-budget-review/d-my-budget-review.component';
import { DPlanningForTheFutureComponent } from './components/d-planning-for-the-future/d-planning-for-the-future.component';
import { EducationAndTrainingComponent } from './components/education-and-training/education-and-training.component';
import { ExternalHomeComponent } from './components/external-home/external-home.component';
import { FunFunFunComponent } from './components/fun-fun-fun/fun-fun-fun.component';
import { HealthAndFitnessComponent } from './components/health-and-fitness/health-and-fitness.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { HousingFurnitureAndUtilitiesComponent } from './components/housing-furniture-and-utilities/housing-furniture-and-utilities.component';
import { IncreaseYourCreditScoreComponent } from './components/increase-your-credit-score/increase-your-credit-score.component';
import { LifeHappensIdentityTheftPopupComponent } from './components/life-happens-identity-theft-popup/life-happens-identity-theft-popup.component';
import { LifeHappensCarAccidentAtFaultPopupComponent } from './components/life-happens-car-accident-at-fault-popup/life-happens-car-accident-at-fault-popup.component';
import { LifeHappensCarAccidentAtNotFaultPopupComponent } from './components/life-happens-car-accident-at-not-fault-popup/life-happens-car-accident-at-not-fault-popup.component';
import { LifeHappensGoodPopupBirthdayComponent } from './components/life-happens-good-popup-birthday/life-happens-good-popup-birthday.component';
import { LifeHappensGoodPopupNoaccidentsComponent } from './components/life-happens-good-popup-noaccidents/life-happens-good-popup-noaccidents.component';
import { LifeHappensGoodPopupReimbursementComponent } from './components/life-happens-good-popup-reimbursement/life-happens-good-popup-reimbursement.component';
import { LifeHappensGoodPopupVolunteerComponent } from './components/life-happens-good-popup-volunteer/life-happens-good-popup-volunteer.component';
import { LifeHappensTextingAndDrivingPopupComponent } from './components/life-happens-texting-and-driving-popup/life-happens-texting-and-driving-popup.component';
import { LifestyleComponent } from './components/lifestyle/lifestyle.component';
import { LoginComponent } from './components/login/login.component';
import { MoneyModulesComponent } from './components/money-modules/money-modules.component';
import { PartTimeJobsComponent } from './components/part-time-jobs/part-time-jobs.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { TransportationComponent } from './components/transportation/transportation.component';
import { TruefalseFoodNutritionCorrectComponent } from './components/truefalse-food-nutrition-correct/truefalse-food-nutrition-correct.component';
import { TruefalseFoodNutritionIncorrectComponent } from './components/truefalse-food-nutrition-incorrect/truefalse-food-nutrition-incorrect.component';
import { TruefalseFoodNutritionComponent } from './components/truefalse-food-nutrition/truefalse-food-nutrition.component';
import { WarningCheckingBelow500Component } from './components/warning-checking-below500/warning-checking-below500.component';
import { WarningOverRelianceComponent } from './components/warning-over-reliance/warning-over-reliance.component';
import { WarningSavingsBelow500Component } from './components/warning-savings-below500/warning-savings-below500.component';
import { Warning30Component } from './components/warning30/warning30.component';
import { IncreaseYourCreditScoreOneComponent } from './components/increase-your-credit-score-one/increase-your-credit-score-one.component';
import { IncreaseYourCreditScoreTwoComponent } from './components/increase-your-credit-score-two/increase-your-credit-score-two.component';
import { IncreaseYourCreditScoreAnswersOneComponent } from './components/increase-your-credit-score-answers-one/increase-your-credit-score-answers-one.component';
import { IncreaseYourCreditScoreAnswersTwoComponent } from './components/increase-your-credit-score-answers-two/increase-your-credit-score-answers-two.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { UnauthorisedInterceptor } from './interceptor/unauthorised.interceptor';
import { PublicProfileComponent } from './public-profile/public-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarsComponent,
    BudgetReviewPopUpComponent,
    CalculatorPopUpSecondComponent,
    CalculatorPopUpComponent,
    CharitableGivingComponent,
    ComingSoonComponent,
    DFoodNutritionComponent,
    DMyBudgetReviewComponent,
    DPlanningForTheFutureComponent,
    EducationAndTrainingComponent,
    ExternalHomeComponent,
    FunFunFunComponent,
    HealthAndFitnessComponent,
    HelpComponent,
    HomeComponent,
    HousingFurnitureAndUtilitiesComponent,
    IncreaseYourCreditScoreComponent,
    LifeHappensIdentityTheftPopupComponent,
    LifeHappensCarAccidentAtFaultPopupComponent,
    LifeHappensCarAccidentAtNotFaultPopupComponent,
    LifeHappensGoodPopupBirthdayComponent,
    LifeHappensGoodPopupNoaccidentsComponent,
    LifeHappensGoodPopupReimbursementComponent,
    LifeHappensGoodPopupVolunteerComponent,
    LifeHappensTextingAndDrivingPopupComponent,
    LifestyleComponent,
    LoginComponent,
    MoneyModulesComponent,
    PartTimeJobsComponent,
    StudentLoginComponent,
    StudentRegistrationComponent,
    TransportationComponent,
    TruefalseFoodNutritionCorrectComponent,
    TruefalseFoodNutritionIncorrectComponent,
    TruefalseFoodNutritionComponent,
    WarningCheckingBelow500Component,
    WarningOverRelianceComponent,
    WarningSavingsBelow500Component,
    Warning30Component,
    IncreaseYourCreditScoreOneComponent,
    IncreaseYourCreditScoreTwoComponent,
    IncreaseYourCreditScoreAnswersOneComponent,
    IncreaseYourCreditScoreAnswersTwoComponent,
    PublicProfileComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    PipeModule,
    ClipboardModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SubComponentModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorisedInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
