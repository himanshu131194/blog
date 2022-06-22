describe('sitemap', () => {
  it('sitemap.xml 파일이 존재한다.', () => {
    cy.request('sitemap.xml')
      .as('sitemap')
      .then((response) => {
        expect(response.status).to.equal(200);
      });
  });

  /* 
  TODO-GYU: sitemap에 존재하는 url이 유효한지 테스트 하고 싶다면 해제
  // ref: https://stackoverflow.com/questions/55100545/cypress-io-sitemap-xml-validation-test
  
  let urls = [];

  before(() => {
    cy.request('sitemap.xml')
      .as('sitemap')
      .then((response) => {
        urls = Cypress.$(response.body)
          .find('loc')
          .toArray()
          .map((el) => el.innerText);
      });
  });

  // sitemap 순회하여,
  // 등록된 모든 페이지가 존재하는지 확인
  it('sitemap 이 존재한다.', () => {
    // sitemap 에 등록된 url 에 방문하여 존재하는지 확인
    urls.forEach(cy.visit);
  });
  */
});
