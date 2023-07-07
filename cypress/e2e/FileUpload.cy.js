describe("File upload", () => {
  it("single File upload", () => {
    cy.visit("http://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("angular.docx");
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });


  it("File upload - Rename", () => {
    cy.visit("http://the-internet.herokuapp.com/upload");
    cy.get('#file-upload').attachFile({filePath:'angular.docx', fileName:'myfile.docx'});
    cy.get('#file-submit').click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");

  });

  it.only("File upload - drag and drop", () => {
    cy.visit("http://the-internet.herokuapp.com/upload");
    cy.get('#drag-drop-upload').attachFile('Doc1.pdf',{subjectType:'drag-n-drop'});
    cy.wait(3000);
    cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span")
    .contains('Doc1.pdf');     
  });


  it("Multiple file upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get('#filesToUpload').attachFile(["Doc1.pdf","angular.docx"]);
    cy.wait(2000);
    cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:');
    
  });

  // it.only("File upload - shadow Dom", () => {});
});
