/// <reference types="cypress" />
import "cypress-iframe";
import { IframesPage } from "../support/pageObjects/IframesPage";

const iframesPage = new IframesPage();

Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignora exceções não capturadas para que não interrompam a execução do teste
  return false;
});

context("Funcionalidade: Interação com Iframes", () => {
  beforeEach(() => {
    iframesPage.visitarPagina();
  });

  it.skip("Tentar interagir com elemento dentro do iframe (sem trocar contexto)", () => {
    // esse teste ficará com o .skip, serve apenas para entender o motivo
    // de trocarmos de contexto para interagir com os iframes
    iframesPage.InteragirComElementoDentroDoIframe();
  });

  it("Conferir se iframe foi carregado em tela após acesso", () => {
    iframesPage.ValidarIframeCarregado();
  });

  it("Iframes dentro de iFrames", () => {
    iframesPage.ValidarIframeCareegadoDentroDeIframe();
  });

  it("Interagir com elemento dentro do iframe (trocando contexto)", () => {
    iframesPage.InteragirComElementoDentroDoIframetc();
    iframesPage.ValidarTextoIframe();
  });

  it("Executar algumas ações dentro do iframe (enter)", () => {
    iframesPage.InteragirComCorpodpIframe();
    iframesPage.ValidarCorpoIframe();
  });

  it("Interagir com elemento de iframe dentro de iframe", () => {
    cy.get("a.analystic[href$=Multiple]").click();

    // assim não funciona, precisa navegar na estrutura
    // cy.iframe('[src*=SingleFrame]')
    //   .find('input[type=text]')
    //   .should('be.visible')
    //   .type('bora agilizar')

    iframesPage.NavegandoPelaEstrutura();
    iframesPage.ValidarNavegacaoPelaEstrutura();
  });
});
