import { writable } from 'svelte/store';

export type Feedback = {
	id: string;
	rating: number;
	message: string;
};

const defaultStore: Feedback[] = [
	{
		id: '1',
		rating: 2,
		message:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi blanditiis qui illum mollitia minima veniam maxime exercitationem inventore asperiores. Eaque.'
	},
	{
		id: '2',
		rating: 4,
		message:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est incidunt impedit officia minima fugit veritatis dignissimos optio soluta, similique sit, repellendus debitis beatae officiis! Culpa minus quidem dignissimos obcaecati laborum.'
	},
	{
		id: '3',
		rating: 5,
		message:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nam libero similique doloribus, optio, facere repellendus animi temporibus sit, ut repudiandae quibusdam repellat inventore!'
	},
	{
		id: '4',
		rating: 3,
		message:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ducimus doloremque, dolor possimus corrupti, tempora sint pariatur distinctio quidem, officiis reprehenderit culpa ullam id illo beatae maxime. In!'
	}
];

export const feedbackStore = writable<Feedback[]>(defaultStore);
