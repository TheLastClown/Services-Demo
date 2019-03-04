function randomId() {
  const id = ((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return id.replace(/#| |\.|\*|!|¡|\?|¿|"/g, "");
}

export default randomId;
