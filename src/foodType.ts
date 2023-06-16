export interface Pokedex {
    GroupId:       number;
    DayId:         number;
    DayDate:       string;
    MiladiDayDate: Date;
    DayTitle:      string;
    DayState:      number;
    DayStateTitle: StateTitle;
    ActiveDay:     boolean;
    Meals:         Meal[];
}

export enum StateTitle {
    برنامهرزروتعریفنشدهاست = "برنامه رزرو تعریف نشده است",
    خارجازمحدودهبرنامهزمانبندیرزرو = "خارج از محدوده برنامه زمانبندی رزرو",
    فعال = "فعال",
}

export interface Meal {
    Id:             number;
    Date:           string;
    MiladiDayDate:  string;
    DayName:        string;
    MealId:         number;
    MealName:       string;
    MealState:      number;
    MealStateTitle: StateTitle;
    FoodCountLimit: FoodCountLimit[];
    FoodTypeMenu:   FoodTypeMenu[];
    FoodMenu:       FoodMenu[];
    LastReserved:   LastReserved[];
}

export interface FoodCountLimit {
    FoodType:  number;
    PriceType: number;
    MaxCount:  number;
}

export interface FoodMenu {
    FoodId:     number;
    FoodName:   string;
    PictureUrl: string[];
    FoodType:   number;
    Compounds:  string;
    FoodState:  number;
    SelfMenu:   SelfMenu[];
}

export interface SelfMenu {
    SelfId:          number;
    SelfName:        SelfName;
    Price:           number;
    Yarane:          number;
    ShowPrice:       number;
    MaxReserveCount: number;
    HasDailySale:    boolean;
}

export enum SelfName {
    سلفمرکزیشام = "سلف مرکزی (شام)",
    سلفمرکزیناهار = "سلف مرکزی (ناهار)",
    سلفمکملآسمان = "سلف مکمل آسمان",
    سلفمکملالغدیر = "سلف مکمل الغدیر",
    سلفمکملشاهر = "سلف مکمل شاهر",
    سلفمکملهشتبهشت = "سلف مکمل هشت بهشت",
}

export interface FoodTypeMenu {
    ID:     number;
    Name:   Name;
    _Total: number;
}

export enum Name {
    غذا = "غذا",
}

export interface LastReserved {
    Id:                   number;
    FoodId:               number;
    FoodName:             string;
    FoodType:             number;
    FoodTypeTitle:        Name;
    SelfId:               number;
    SelfName:             SelfName;
    Price:                number;
    Yarane:               number;
    ReserveState:         number;
    PriceType:            number;
    Count:                number;
    Op:                   number;
    OpTitle:              string;
    DeviceId:             number;
    EatedDateTime:        string;
    IdentificationTypeID: number;
    ReserveNumber:        string;
}

