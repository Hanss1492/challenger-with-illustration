import axios from 'axios';
import { Element  } from '../models/Element';
import { API_BASE_URL, ELEMENT_ENDPOINT } from '../config/apiConfig';


export const fetchElements = async () => {
  try {
    const response = await axios.get<Element[]>(`${API_BASE_URL}${ELEMENT_ENDPOINT}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching elements');
  }

};

