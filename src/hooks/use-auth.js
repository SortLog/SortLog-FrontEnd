import { useContext } from 'react';
import { AuthContext } from '@/contexts/amplify-context';

export const useAuth = () => useContext(AuthContext);
