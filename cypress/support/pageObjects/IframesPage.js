export class IframesPage {
  visitarPagina() {
    cy.visit("http://demo.automationtesting.in/Frames.html");
  }
  InteragirComElementoDentroDoIframe() {
    // sem trocar de contexto
    cy.get("input[type=text]")
      .first()

      .type("bora agilizar");
  }
  ValidarIframeCarregado() {
    cy.frameLoaded("#singleframe");
  }
  ValidarIframeCareegadoDentroDeIframe() {
    cy.get("a.analystic[href$=Multiple]").click();

    cy.frameLoaded("[src*=SingleFrame]");
    cy.frameLoaded("[src*=MultipleFrames]");
  }
  InteragirComElementoDentroDoIframetc() {
    // trocando de contexto
    cy.iframe("[src*=SingleFrame]")
      .find("input[type=text]")
      .type("teste de interação com iframe");
  }
  ValidarTextoIframe() {
    cy.iframe("[src*=SingleFrame]")
      .find("input[type=text]")
      .should("be.visible", "teste de interação com iframe");
  }
  InteragirComCorpodpIframe() {
    cy.enter("[src*=SingleFrame]").then((body) => {
      body().find("input[type=text]").type("Agilizando com iframe");
    });
  }
  ValidarCorpoIframe() {
    cy.enter("[src*=SingleFrame]").then((body) => {
      body()
        .find("input[type=text]")
        .should("be.visible", "Agilizando com iframe");
    });
  }
  NavegandoPelaEstrutura() {
    cy.iframe("[src*=MultipleFrames]").within(() => {
      cy.iframe("[src*=SingleFrame]")
        .find("input[type=text]")
        .type("bora agilizar");
    });
  }
  ValidarNavegacaoPelaEstrutura() {
    cy.iframe("[src*=MultipleFrames]").within(() => {
      cy.iframe("[src*=SingleFrame]")
        .find("input[type=text]")
        .should("be.visible", "bora agilizar");
    });
  }
}
