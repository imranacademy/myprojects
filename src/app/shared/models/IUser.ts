
    export interface CustomerRegistrationData {
        transactionId: number;
        cnic: string;
        mobileNo: string;
        mnp?: any;
        email: string;
        isFirstLogin: boolean;
        isLogin: boolean;
        loginName: string;
        debitCard: string;
        passwordUpdateDate: number;
        isLock: boolean;
        securityQ?: any;
        securityA?: any;
        userStatus: number;
        upLoad: number;
        customerType: number;
        creditCard: string;
        source: string;
        wrongPasswordCount: number;
        birthDate: Date;
        initialFee: number;
        category: string;
        categoryDate: Date;
        is_CrossSell: number;
        isPassport: number;
        isBioVerified: number;
        bioVerficationDate?: any;
        serviceType?: any;
        setupId: number;
        customerTitle: string;
        customerId: string;
        isConventional: boolean;
        isPremier: boolean;
        isLoginActive: boolean;
        isIbftActive: boolean;
        isThreePftActive: boolean;
        isBuyTicketsActive: boolean;
        isMobileTopUpActive: boolean;
        isUtilityActive: boolean;
        isCardActive: boolean;
        isFeePaymentActive: boolean;
        isValueAddedActive: boolean;
        loginDate: Date;
        amount: number;
        totalTransactions: string;
    }

    export interface UserMenu {
        id: number;
        customerType: number;
        customerTypeDescription: string;
        menuName: string;
        menuIcon: string;
        menuAddress: string;
        menuParentID?: number;
    }

    export interface Datum {
        id: number;
        customerRegistrationData: CustomerRegistrationData[];
        userMenu: UserMenu[];
    }

    export interface Data {
        responseCode: string;
        responseDescription: string;
        token: string;
        data: Datum[];
        orbits?: any;
    }

    export interface IUser {
        data: Data;
    }



