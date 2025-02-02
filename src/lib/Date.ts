import { format } from 'date-fns';

export const formatDateWithDash = (date) => {
	try {
		return format(new Date(date), 'yyyy-MM-dd');
	} catch (error) {
		console.error('Date - formatDateWithDash', error);
		return '';
	}
};

