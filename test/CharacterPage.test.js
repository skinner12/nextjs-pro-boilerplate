import { render, screen } from '@testing-library/react';
import { SingleCard } from '@/components/SingleCard.tsx'; // Assicurati che il percorso sia corretto

describe('SingleCard', () => {
  const mockCharacter = {
    id: 47,
    name: 'Birdperson',
    status: 'Alive',
    species: 'Alien',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/47.jpeg',
    // ... altri campi se necessario ...
  };

  it('renders the character name, gender, and species', () => {
    render(<SingleCard c={mockCharacter} />);

    const nameElement = screen.getByText(/Birdperson/i);
    expect(nameElement).toBeInTheDocument();

    const genderSpeciesElement = screen.getByText(/Male \/ Alien/i);
    expect(genderSpeciesElement).toBeInTheDocument();
  });

  it('renders the character image', () => {
    render(<SingleCard c={mockCharacter} />);

    const imageElement = screen.getByAltText(/Birdperson/i);
    expect(imageElement).toBeInTheDocument();
  });

  // Puoi aggiungere altri test qui per controllare altri aspetti del tuo componente, come il pulsante "More Infos", ecc.
});
