/**

The Reading List
Keep track of which books you've read and which books you want to read!

=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 books

=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you have read it yet or not. 

If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien', 
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/

const { title } = require('process');

const books = [
	{
		title: 'As a Man Thinkth',
		author: 'James Allen',
		isRead: true,
	},
	{
		title: 'Emotional Intelligence',
		author: 'Daniel Goleman',
		isRead: true,
	},
	{
		title: 'The Power of Now',
		author: 'Eckhart Tolle',
		isRead: true,
	},
	{
		title: 'The Alchemist',
		author: 'Paulo Coelho',
		isRead: true,
	},
	{
		title: 'The Pragmatic Programmer',
		author: 'Andrew Hunt.',
		coauthor: 'David Thomas',
		isRead: false,
	},
];

const booksAndAuthors = books.forEach(entry => console.log(`${entry.title} by ${entry.author}`));

const checkIfIHaveReadIt = books.forEach(entry => {
	if (entry.isRead) {
		console.log(`I have already read ${entry.title} by ${entry.author}`);
	} else {
		console.log(
			`I still need to read ${entry.title} by ${entry.author}`
		);
	}
});
