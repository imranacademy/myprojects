export interface ICardSummary {
    responseCode:string;
    authIdResponse:string;
    cardNumber:string;
    amountDue:string;
    dueDate:string;
    minPaymentDue:string;
    totalCashAdvanceLimit:string;
    availableCashAdvanceLimit:string;
    outstandingBalance:string;
    rewardsEarned:string;
    rewardsRedeemed:string;
    rewardsAvailable:string;
    availableCreditLimit:string;
    totalCreditLimit:string;
    lastPaymentAmount:string;
    lastPaymentDate:string;
    totalCurrentSpending:string;
    currencyCode:string;
    cardstatusCode:string;
    plasticCode:string;
    feeWaiverSpending:string;
}