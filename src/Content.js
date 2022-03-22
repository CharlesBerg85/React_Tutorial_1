import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const [games, setGames] = useState([
      {
        id: 1,
        checked: false,
        game: "Elden Ring"
      },
      {
        id: 2,
        checked: false,
        game: "Fortnite"
      },
      {
        id: 3,
        checked: false,
        game: "Silent Hill"
      }
    ]);

    const handleCheck = (id) => {
      const listGames = games.map((game) => game.id === id ? { ...game, checked: !game.checked } : game);
      setGames(listGames);
      localStorage.setGame('gamelist', JSON.stringify(listGames));
    }

    const handleDelete = (id) => {
      const listGames = games.filter((game) => game.id !== id);
      setGames(listGames);
      localStorage.setGame('gamelist', JSON.stringify(listGames));
    }
  
  return (
      <main>
        {games.length ? (
          <ul>
              {games.map((game) => (
                <li className="game" key={game.id}>
                    <input
                        type="checkbox"
                        onChange={() => handleCheck(game.id)}
                        checked={game.checked}
                    />
                    <label
                        onDoubleClick={() => handleCheck(game.id)}
                        style={(game.checked) ? { textDecoration: 'line-through'} : null}
                    >{game.game}</label>
                    <FaTrashAlt 
                        onClick={() => handleDelete(game.id)}
                        role="button" 
                        tabIndex="0"
                    />
                </li>
              ))}
          </ul>
        ): (
          <p style={{marginTop: '2rem'}}>Your list is empty.</p>
        )}
      </main>
  )
}

export default Content