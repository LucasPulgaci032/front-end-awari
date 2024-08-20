
    function OutraLista({ itens }) {
        return (
          <ul>
            {itens.map((item, index) => (
              <li key={index}>
                {typeof item === 'object' ? item.framework : item}
              </li>
            ))}
          </ul>
        );
      }
      
 

export default OutraLista