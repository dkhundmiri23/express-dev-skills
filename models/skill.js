const skills = [
    {id: 125223, skill: 'javascript', done: true},
    {id: 127904, skill: 'c++', done: false},
    {id: 139608, skill: 'python', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };

  function getOne (id) {
    id = parseint(id);
    return skills.find(skill => skill.id === id); 
  }
	
  function getAll() {
    return skills;
  }