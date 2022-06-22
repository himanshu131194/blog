describe('robots', () => {
  it('robots.txt 파일이 존재한다.', () => {
    cy.request('robots.txt')
      .as('robots')
      .then((response) => {
        expect(response.status).to.equal(200);
      });
  });
});
