import { useState } from 'react'
import { produce } from 'immer';

import styles from './App.module.scss';
import PulseFitLogo from './assets/PulseFitLogo.png';
import Header from './components/Header'
import Dashboard from './components/Dashboard';
import { MockTrainers } from './data/MockTrainers';
import type { ITimeSlot, ITrainer } from './data/MockTypes';
import ErrorMessage from './components/ErrorMessage';
import SubmitConfirmation from './components/SubmitConfirmation';


function App() {
  const [error, setError] = useState<string | null>(null);
  const [submittedSlot, setSubmittedSlot] = useState<ITimeSlot | null>(null);
  const [submittedTrainer, setSubmittedTrainer] = useState<ITrainer | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [trainerData, setTrainerData] = useState<ITrainer[]>(MockTrainers);

  const errorMsg = 'An error has occurred.  Please contact us by the link below to book an appointment.';

  const submit = (selectedSlotId: string, selectedDate: Date): void => {
    // Assumption: Trainer ID is always prepended to the Slot ID and is case sensitive.

    // Ideally this would is where we could call an API to handle this process for us and then refresh data.
    // Additionally, it would be located in a separate data layer of the project, not here.
    // For the purposes of this demo, we'll just modify the item in state.

    // Clear any errors if they currently exist
    setError(null);

    // Attempt to parse Trainer ID from the Slot ID
    const trainerId = selectedSlotId?.split('-')?.[0] ?? null;
    if (trainerId === null) {
      // Trainer ID couldn't be found, log error and end submission
      console.error('Trainer ID could not be parsed from the selected ID: ', selectedSlotId);
      setError(errorMsg);
      return;
    }

    const selectedTrainerIdx = trainerData.findIndex(trainer => trainer.id === trainerId);
    if (selectedTrainerIdx === -1) {
      // If we were unable to find the trainer or slot by ID, log error and end submission
      console.error(`Unable to find trainer with ID ${trainerId}.`);
      setError(errorMsg);
      return;
    }
    const selectedTrainer = trainerData[selectedTrainerIdx];

    const selectedSlotIdx = selectedTrainer.availability.findIndex(slot => slot.id === selectedSlotId);
    if (selectedSlotIdx === -1) {
      // If we were unable to find the slot by ID, log error and end submission
      console.error(`Found trainer with ID ${trainerId}, but unable to find slot with ID ${selectedSlotId}.`);
      setError(errorMsg);
      return;
    }
    const selectedSlot = selectedTrainer.availability[selectedSlotIdx];

    setTrainerData(prev => 
      produce(prev, draft => {
        // Normally a mutation like this is not reflected in state, but immer produce makes this possible so it works.
        // https://immerjs.github.io/immer/produce/
        draft[selectedTrainerIdx].availability[selectedSlotIdx].isAvailable = false;
      })
    );

    // Update was successful, display the confirmation page
    setSubmittedTrainer({ ...selectedTrainer });
    setSubmittedSlot({ ...selectedSlot });
    setSelectedDate(selectedDate);
  }

  return (
    <>
      <Header logo={PulseFitLogo} user='Kevin' logoUrl='/' />
      <main className={styles.app}>
        {error && <ErrorMessage message={error} /> }
        { submittedTrainer && submittedSlot
          ? <SubmitConfirmation
              text='Your visit is booked.'
              onClose={() => { setSubmittedTrainer(null); setSubmittedSlot(null); }} 
              slot={submittedSlot}
              trainer={submittedTrainer}
              selectedDate={selectedDate}
          />
          : <Dashboard 
            trainerData={trainerData} 
            headerText='Book a visit' 
            descriptionText='Choose a date to see available times.'
            submit={submit}
          />
        }
      </main>
    </>
  )
}

export default App
