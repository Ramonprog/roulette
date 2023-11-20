import { createContext, useState, ReactNode } from 'react';

export const ParticipantsContext = createContext({})

type ProviderProps = {
    children: ReactNode;
};

const ParticipantsProvider = ({ children }: ProviderProps) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [participants, setParticipants] = useState<string[]>([]);

    return (
        <ParticipantsContext.Provider value={{ participants, setParticipants }}>
            {children}
        </ParticipantsContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default ParticipantsProvider