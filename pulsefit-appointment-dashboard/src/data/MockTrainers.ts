import type { ITrainer } from './mocktypes';

export const MockTrainers: ITrainer[] = [
    {
        id: '8',
        name: 'Julie Ertz',
        title: 'Personal Trainer - Strength & Conditioning',
        image: 'src/assets/trainers/julie.png',
        availability:[
                // Assumption: backend will only give us time slots for a single day as they are selected.
                // That way, the frontend does not need to do manual filtering when a user selects a new date.
                // This would be handled with a new API call each time the user changes a date.
                // If this is not possible on the backend, frontend filtering would be required and performance adjustments will be necessary.

                // Along with this, we may need an "available days" field from API, assumed out of scope for this demo.
                
                { id: "8-2025-11-07-1200", time: "12:00 PM", isAvailable: true },
                { id: "8-2025-11-07-1300", time: "1:00 PM", isAvailable: true },
                { id: "8-2025-11-07-1400", time: "2:00 PM", isAvailable: true },
                { id: "8-2025-11-07-1500", time: "3:00 PM", isAvailable: true },
                { id: "8-2025-11-07-1600", time: "4:00 PM", isAvailable: true },
                { id: "8-2025-11-07-1700", time: "5:00 PM", isAvailable: true },
                { id: "8-2025-11-07-1800", time: "6:00 PM", isAvailable: true },
                { id: "8-2025-11-07-1900", time: "7:00 PM", isAvailable: true },
                { id: "8-2025-11-07-2000", time: "8:00 PM", isAvailable: true },
            ]
    },
    {
        id: '44',
        name: 'Anthony Rizzo',
        title: 'Personal Trainer - Weight Loss & Wellness',
        image: 'src/assets/trainers/anthony.png',
        availability:[
                { id: "44-2025-11-07-1200", time: "12:00 PM", isAvailable: true },
                { id: "44-2025-11-07-1300", time: "1:00 PM", isAvailable: true },
                { id: "44-2025-11-07-1400", time: "2:00 PM", isAvailable: true },
                { id: "44-2025-11-07-1500", time: "3:00 PM", isAvailable: true },
                { id: "44-2025-11-07-1600", time: "4:00 PM", isAvailable: true },
                { id: "44-2025-11-07-1700", time: "5:00 PM", isAvailable: true },
            ]
    },
    {
        id: '23',
        name: 'Michael Jordan',
        title: 'Personal Trainer - Functional Fitness & Mobility',
        image: 'src/assets/trainers/michael.png',
        availability:[
                { id: "23-2025-11-07-1200", time: "12:00 PM", isAvailable: true },
                { id: "23-2025-11-07-1300", time: "1:00 PM", isAvailable: true },
                { id: "23-2025-11-07-1400", time: "2:00 PM", isAvailable: true },
                { id: "23-2025-11-07-1500", time: "3:00 PM", isAvailable: true },
                { id: "23-2025-11-07-1600", time: "4:00 PM", isAvailable: true },
                { id: "23-2025-11-07-1700", time: "5:00 PM", isAvailable: true },
                { id: "23-2025-11-07-1800", time: "6:00 PM", isAvailable: true },
                { id: "23-2025-11-07-1900", time: "7:00 PM", isAvailable: true },
                { id: "23-2025-11-07-2000", time: "8:00 PM", isAvailable: true },
            ]
    }
]