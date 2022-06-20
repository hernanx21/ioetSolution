const { DocumentRepository } = require('../../src/helpers');

const document = new DocumentRepository();

describe('ioetSolutionTests', () => {
    describe('functions to test', ()=> {
        it('it should have a user schedule info', () => {
            const user = jest.fn().mockReturnValue('RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00')

            expect(document.getUserSchedule(user())).toEqual([ 'RENE', ['MO10:00-12:00','TU10:00-12:00','TH01:00-03:00','SA14:00-18:00','SU20:00-21:00'] ]);
        })

        it('it should have the schedule as a string', () => {
            const schedule = jest.fn().mockReturnValue('MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00')

            expect(document.getSchedule(schedule())).toEqual( ['MO10:00-12:00','TU10:00-12:00','TH01:00-03:00','SA14:00-18:00','SU20:00-21:00'] );
        })

        it('it should validate redundancy', () => {
            const currentUser = jest.fn().mockReturnValue([ 'RENE', ['MO10:00-12:00','TU10:00-12:00','TH01:00-03:00','SA14:00-18:00','SU20:00-21:00'] ])
            const lastUser = jest.fn().mockReturnValue([ 'MIGUEL', ['MO09:00-09:30','TU13:00-14:00','SU20:00-21:00'] ])

            expect(document.validateRedundancy(currentUser(), lastUser())).toBeTruthy();
        })

        it('it should have the schedule as a string', () => {
            const period = jest.fn().mockReturnValue('MO10:00-12:00')

            expect(document.splitHours(period())).toEqual( ['10', '12'] );
        })
    })
})