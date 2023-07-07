describe("handle Tables",() =>{

    //beforeEach() will run before every it block
    //hook
    beforeEach("login",() =>{
        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")
        cy.get('#input-username').type("demo")
        cy.get("#input-password").type('demo')
        cy.get('button[type="submit"]').click()
        cy.get('button.btn-close').click()
        //Customer --->> customer
        cy.get('#menu-customer>a').click()
        cy.get('#menu-customer>ul>li:first-child').click()

    })
    it.skip('Check number of rows and columns',() =>{
        cy.get('table.table.table-bordered.table-hover>tbody>tr').should('have.length','10')
        cy.get('table.table.table-bordered.table-hover>thead>tr>td').should('have.length','7')
    })

    it.skip('Check cell data from specific row and colum',() =>{
        cy.get('tbody tr:nth-child(5) td:nth-child(3)').contains('xvrt@test.com')
    })
    it.only('Read all the rows & Columns data in the first page',() =>{
        cy.get('table.table-bordered.table-hover>tbody>tr')
        .each( ($row, index, $rows) =>{
            cy.wrap($row).within( () =>{
                cy.get('td').each( ($col, index, $cols) =>{
                    cy.log($col.text());
                })
            })
        })
    })
    it.skip('Pagination',() =>{
        // find total no of pages
        // let totalPages;
        // cy.get('.col-sm-6.text-end').then( (e)=>{
        //     let mytext=e.text(); //Showing 1 to 10 of 13057 (1306 Pages)
        //     totalPages=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1);
        //     cy.log("Total number of pages in a table===>"+totalPages)
        // })

        //only for 5 pages
        let totalPages=5;
        for(let p=1;p<=totalPages;p++)
        {
            if(totalPages>1)
            {
                cy.log("Active page is =="+p);
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();

                cy.get('table.table-bordered.table-hover>tbody>tr')
                .each(($row, index, $rows) =>{
                    cy.wrap($row).within( ()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text());//Email
                        })
                    })
                })
            }
        }
         
    })
})