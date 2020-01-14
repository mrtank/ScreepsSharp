//most of these are tempoerary while I build up the framework

global.bindings =
{
	roomNames: function () { return Object.keys(Game.rooms); },
	creepNames: function () { return Object.keys(Game.creeps); },
	spawnNames: function () { return Object.keys(Game.spawns); }
}

global.invokeByObjId = function (id, func, args)
{
	if (!id) { throw new Error("No id parameter"); };

	let obj = Game.getObjectById(id);
	if (!func) { return obj; }

	if (!obj) { throw new Error(`No object found with ${id} found.`); }
	//if (obj[func] === undefined) { throw new Error(`No target ${func} found on ${obj}`); }

	if (typeof obj[func] !== "function") { return obj[func]; }
	return obj[func].apply(obj, args);
}

Room.prototype.findIds = function (findType, opts)
{
	return _.map(this.find(findType, opts), val => val.id);
}

Creep.prototype._harvest = function (id) { return this.harvest(Game.getObjectById(id)); }
Creep.prototype._build = function (id) { return this.build(Game.getObjectById(id)); }
Creep.prototype._upgradeController = function (id) { return this._upgradeController(Game.getObjectById(id)); }
Creep.prototype._transfer = function (id, resource, amount) { return this._transfer(Game.getObjectById(id), resource, amount); }