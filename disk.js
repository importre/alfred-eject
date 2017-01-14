function run(argv) {
	const disks = Application('Finder')
		.items()
		.filter(item => item.disk.ejectable())
		.map(item => ({
			title: 'Eject ' + item.displayedName(),
			subtitle: item.description() || '',
			arg: item.disk().id()
		}));

	const items = [{
		title: 'Eject all',
		subtitle: '',
		arg: 'all'
	}].concat(disks);

	return JSON.stringify({
		items
	});
}

