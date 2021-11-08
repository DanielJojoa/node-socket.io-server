const { io } = require('../index');
const Bands = require('../Models/bands');

const bands = new Bands();

bands.addBand('Metallica');
bands.addBand('Iron Maiden');
bands.addBand('Megadeth');
bands.addBand('Black Sabbath');
bands.addBand('Deep Purple');
bands.addBand('AC/DC');

// Mensajes de Sockets
io.on('connection', client => {
    client.emit('active-bands', bands.getBands());
    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    client.on('vote-band', band => {
        bands.voteBand(band);
        io.emit('active-bands', bands.getBands());
    })

    client.on('add-band', band => {
        bands.addBand(band);
        io.emit('active-bands', bands.getBands());
    })

    client.on('delete-band', band => {
        bands.deleteBand(band);
        io.emit('active-bands', bands.getBands());
    });

    client.on('mensaje', ( payload ) => {
        console.log('Mensaje', payload);

        io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );

    });


});
