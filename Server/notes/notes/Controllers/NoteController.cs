using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Formats.Asn1;
using System.Reflection.Metadata.Ecma335;
using System.Diagnostics;

namespace notes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        private readonly DataContext _dataContext;

        public NoteController(DataContext dataContext)
        {
            this._dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Note>>> Get()
        {
            return Ok(await _dataContext.Notes.ToListAsync());
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Note>> Get(int id)
        {
            var note = await _dataContext.Notes.FindAsync(id);
            if (note == null)
                return BadRequest("The note was not found");
            return Ok(note);
        }

        [HttpPost]
        public async Task<ActionResult<List<Note>>> AddNote(Note note)
        {
            _dataContext.Notes.Add(note);
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Notes.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Note>>> UpdateNote(Note note)
        {
            var dbNote = await _dataContext.Notes.FindAsync(note.id);
            if (dbNote == null)
                return BadRequest("The note was not found");

            dbNote.name = note.name;
            dbNote.description = note.description;
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Notes.ToListAsync());

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Note>> Delete(int id)
        {
            var dbNote = await _dataContext.Notes.FindAsync(id);
            if (dbNote == null)
                return BadRequest("The note was not found");

            _dataContext.Notes.Remove(dbNote);
            return Ok(await _dataContext.Notes.ToListAsync());
        }

    }
}
