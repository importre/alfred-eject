const isEjectable = (item, diskId) => {
	const disk = item.disk();
	const ejectable = disk.ejectable();
	if (diskId === 'all' && ejectable) {
		return true;
	}

	return disk.id() === parseInt(diskId, 10) && ejectable;
};

function run(argv) {
	const diskId = argv[0];
	return Application('Finder')
		.items()
		.filter(item => isEjectable(item, diskId))
		.map(item => {
			const name = item.displayedName();
			item.eject();
			return name;
		})
		.join(', ');
}

