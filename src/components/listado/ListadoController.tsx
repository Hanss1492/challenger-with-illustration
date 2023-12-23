import { useState, useEffect } from "react";
import { fetchElements } from "../../services/api";
import { Element } from '../../models/Element';

const ListadoController = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchElements();
        setElements(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, elements };
};

export default ListadoController;
