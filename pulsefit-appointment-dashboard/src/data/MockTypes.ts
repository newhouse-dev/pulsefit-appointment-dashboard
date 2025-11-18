export type ITimeSlot = {
    id: string;
    time: string;
    isAvailable: boolean;
}

export type ITrainer = {
    id: string;
    name: string;
    title: string;
    image: string;
    availability: ITimeSlot[]; 
}

export type IBookingData = {
    trainer: ITrainer
    slot: ITimeSlot;
    date: Date;
}
