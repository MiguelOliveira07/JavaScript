class Curso {
  static cursos = ["JavaScrip", "HTML", "CSS", "Arduino", "C++"];

  static getTodosCursos = () => {
    return this.cursos;
  };
  static getCurso = (i_curso) => {
    return this.cursos[i_curso];
  };
  static addCurso = (novo_curso) => {
    return this.cursos.push(novo_curso);
  };
  static removeCursos = () => {
    this.cursos = [];
  };
}

export default Curso;
